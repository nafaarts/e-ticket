import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// generate sample question for saas application
const questions = [
    {
        question: "Apakah aplikasi ini gratis?",
        answer: "Aplikasi ini gratis untuk digunakan, namun ada beberapa fitur yang memerlukan biaya tambahan."
    },
    {
        question: "Apakah aplikasi ini aman?",
        answer: "Aplikasi ini aman dan mematuhi standar keamanan yang berlaku."
    },
    {
        question: "Apakah aplikasi ini bisa diakses dari perangkat mobile?",
        answer: "Ya, aplikasi ini responsif dan bisa diakses dari perangkat mobile."
    },
    {
        question: "Apakah aplikasi ini bisa diintegrasikan dengan aplikasi lain?",
        answer: "Ya, aplikasi ini memiliki API yang bisa diintegrasikan dengan aplikasi lain."
    }
]

export function FrequentlyAskedQuestion() {
    return (
        <section>
            <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-4">Yang sering ditanyain 🤔</h3>
            <div className="bg-white px-3 rounded">
                <Accordion type="single" collapsible className="w-full">
                    {questions.map((question, index) => (
                        <AccordionItem key={index.toString()} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-xs md:text-base">{question.question}</AccordionTrigger>
                            <AccordionContent className="text-left text-xs md:text-base text-gray-500">{question.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}