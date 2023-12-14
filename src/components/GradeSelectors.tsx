import { Grade } from "../types";

type Props = {
    grade: Grade
    setGrade: (grade: Grade) => void
}

const GradeSelectors = ({grade, setGrade}:Props) => {
    const grades:Grade[] = [1,2,3,4,5,6,8]

    return ( 
        <div className="grade-selector">
            <h2>Grade</h2>
            <div>
            {grades.map((item) => (
                <div key={item}>
                    <input type="radio" name="grade_radio" checked={grade === item} onChange={() => setGrade(item)} id={`grade-${item}`}/>
                    <label htmlFor={`grade-${item}`}>{item}</label>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default GradeSelectors;