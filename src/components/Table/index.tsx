import { FlexCenter, TableWrapper } from "../../defaultStyles";

import { Course, Courses } from "../../types";
import { Button } from "../Button";
import register from "../../images/register.svg";
import moment from "moment";

export const CourseTable: React.FC<{ apiData: Courses | undefined, coursesList: Course[], loading: boolean, page: number, setPage: (page: number) => void; }> = ({ apiData, coursesList, loading, page, setPage }) => {
    return (
        <TableWrapper>
            {coursesList.length > 0 ?
            // Componentise the table
                <table>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>ID</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Dates</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coursesList.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td className="title">{item.name?.replace("<p>", "").replace("</p>", "")}</td>
                                    <td>{item.id}</td>
                                    <td>{item.price}</td>
                                    <td>{item.location}</td>
                                    <td>{`${moment(item.starts_at).format('MMM DD YYYY')} - ${moment(item.ends_at).format('MMM DD YYYY')}`}</td>
                                    <td>Register<img src={register} /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                :
                <div>No data</div>
            }

            {apiData?.current_page !== apiData?.last_page && (
                <FlexCenter>
                    <Button onClick={() => setPage(page + 1)} title={loading ? "Loading..." : "Load more"} />
                </FlexCenter>
            )}
        </TableWrapper>
    )
}