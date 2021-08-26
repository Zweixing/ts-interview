import React from "react";

interface AnswerTotalProps {
    answer: string;
    count: number;
}

const AnswerTotal = ({ answer, count }: AnswerTotalProps) => {
    return (
        <div>
            <div>
                <h2>{answer}</h2>
            </div>
            <div>
                {count}
            </div>
        </div>
    );
}

export default AnswerTotal;