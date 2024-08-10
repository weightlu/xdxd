document.addEventListener('DOMContentLoaded', () => {
    const answers = {
        q1: "танкер",
        q2: "таумономикон",
        q3: "заразы",
        q4: "уфквг",
        q5: "аркана",
        q6: "энтропиннум",
        q7: "лазерный",
        q8: "гравитул",
        q9: "сущность",
        q10: "парасекта",
        q11: "сирень",
        q12: "связанным",
        q13: "добычи",
        q14: "азанор",
        q15: "люцифер",
        q16: "алмазы",
        q17: "каштан",
        q18: "алхимический",
        q19: "искорка",
        q20: "вагонетка"
    };

    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.addEventListener('input', () => {
            const id = input.id;
            const userAnswer = input.value.toLowerCase();
            if (userAnswer === answers[id]) {
                input.classList.add('correct');
                input.classList.remove('incorrect');
            } else {
                input.classList.add('incorrect');
                input.classList.remove('correct');
            }
        });
    });
});