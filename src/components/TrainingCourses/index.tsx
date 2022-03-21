import React, { useEffect, useState } from 'react';
import Select, { MultiValue } from 'react-select';
import { filterCourses } from '../../dataCalls/filterCourses';
import { getCategories } from '../../dataCalls/getCategories';
import { getCoursesList } from '../../dataCalls/getCoursesList';
import { getLocations } from '../../dataCalls/getLocation';
import { Flex, H1, Page } from '../../defaultStyles';

import { Category, Course, Courses, Location } from '../../types';
import { Categories } from '../Categories';
import { CourseTable } from '../Table';

export const TrainingCourses: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [coursesList, setCoursesList] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState<Courses>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<MultiValue<{ value: string; label: string; }>>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<MultiValue<{ value: string; label: string; }>>([]);

  useEffect(() => {
    getCategories({ setLoading, setCategories });
    getLocations({ setLoading, setLocations });
    getCoursesList({ setLoading, setCoursesList, setApiData, coursesList, page, apiData });
  }, [page]);

  let categoriesOptions: { value: string; label: string }[] = [];
  // Make unique
  categories.map(x => categoriesOptions?.push({ value: x.slug, label: x.name }));
  let locationOptions: { value: string; label: string }[] = [];
  // // Make unique
  locations.map(x => locationOptions?.push({ value: x.slug, label: x.name }));


  useEffect(() => {
    if (selectedCategories.length > 0 || selectedLocations.length > 0) {
      filterCourses({ categories, locations, setLoading, selectedCategories, selectedLocations, setCoursesList, setApiData });
    } else {
      getCoursesList({ setLoading, setCoursesList, setApiData, coursesList, page, apiData });
    }
  }, [selectedCategories, selectedLocations]);

  return (
    <Page>
      <H1>Training Courses</H1>
      <Flex>
        <Select
          placeholder="Category"
          onChange={(newValue: MultiValue<{ value: string; label: string; }>) => {
            setSelectedCategories(newValue)
          }}
          options={categoriesOptions}
          isMulti={true}
          isClearable={true}
        />
        <Select
          placeholder="Location"
          onChange={(newValue: MultiValue<{ value: string; label: string; }>) => {
            setSelectedLocations(newValue)
          }}
          options={locationOptions}
          isMulti={true}
          isClearable={true}
        />
      </Flex>

      <CourseTable apiData={apiData} coursesList={coursesList} loading={loading} page={page} setPage={setPage} />
    
          <Categories />
    </Page>
  )
};
