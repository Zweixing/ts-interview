import { useState, useEffect } from "react";
import SurveyResponse, { ISurveyResponse } from "../entities/SurveyResponse";
import AnswerTotal from "../components/AnswerTotal";

const ResponseTotals = () => {
    const [surveyResponses, setSurveyResponses] = useState<ISurveyResponse[] | null>();

    useEffect(() => {
        const loadResponses = async (): Promise<void> => {
            const response = await fetch(`http://localhost:2047/api/responses/all`);
            let data;
            try {
                data = await response.json();
            } catch (error) {
                console.error(error);
                data = null;
            }

            if (response.ok) {
                setSurveyResponses(data.responses)
            } else {
                console.error(`API failure: ${response.status}`, data);
            }
        }

        loadResponses();
    }, []);


    if (surveyResponses) {
    }

    return (
        <>
            {surveyResponses!.map(sResponse => (
                <div>
                    <h1>{sResponse.content.questions[0].question}</h1>
                    <AnswerTotal answer={sResponse.content.questions[0].answer} count={1} />
                </div>
            ))}
        </>
    );
}

export default ResponseTotals;