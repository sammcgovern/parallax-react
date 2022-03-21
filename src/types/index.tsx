export type Course = {
    category: string;
    course_id: string;
    created_at: Date | null;
    ends_at: Date | null;
    id: number;
    link: string | null;
    location: string | null;
    name: string | null;
    price: number;
    slug: string | null;
    starts_at: string | null;
    updated_at: null;
}

export type Link = {
    active: boolean;
    label: number;
    url: string | null;
}

export type Courses = {
    current_page: number | null;
    data: Course[];
    first_page_url: string | null;
    from: number | null;
    last_page: number | null;
    last_page_url: string | number;
    links: Link[];
    next_page_url: string | null;
    path: string | null;
    per_page: number | null;
    prev_page_url: string | null;
    to: number | null;
    total: number | null;
}

export type CoursesServerResponse = {
    courses: Courses;
    errors: any[];
    success: true;
}

export type Category = {
    created_at: string | null;
    description: string | null;
    icon: string;
    id: number;
    name: string;
    slug: string;
    updated_at: null;
}

export type Location = {
    created_at: string | null;
    id: number;
    name: string;
    slug: string;
    updated_at: string | null;
}

export type SelectOption = {
    value: string;
    label: string;
}