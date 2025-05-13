import React from "react";
import { SiGooglesheets } from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import { GrDocumentPdf } from "react-icons/gr";
import budget from "../../images/budget.png"


export default function BudgetTemplatesPage() {

    const templates = [
        {
            name: 'Google Sheet',
            url: 'https://docs.google.com/spreadsheets/d/1-mHV9boiTssF9fBKRgPpe8gYevaD72986dH5Xn5McF8/copy?usp=sharing',
            color: "green",
            icon: <SiGooglesheets color="green" size="40px" />
        },
        {
            name: 'Excel',
            url: '/BudgetTemplate.xlsx',
            color: "green",
            icon: <RiFileExcel2Fill color="green" size="40px" />
        },
        // {
        //     name: 'PDF',
        //     url: '/BudgetTemplate.pdf',
        //     color: "IndianRed",
        //     icon: <GrDocumentPdf color="IndianRed" size="40px" />
        // },
    ];

    return (

        <div>

            <p>Take control of your finances with our free, easy-to-use budget templates. Whether you are familiar with personal finance or just getting started with budgeting, these templates are designed to help you plan, track, and stay on top of your money!</p>
            <div className="my-5">
                <img src={budget} class="img-fluid img-thumbnail rounded w-100" />
            </div>

            <div className="d-flex flex-wrap justify-content-around" style={{ "gap": "10px" }}>

                {templates.map((template, idx) => (
                    <a
                        key={idx}
                        className="d-flex shadow tems-center justify-between p-2 m-2"
                        style={{ "width": "fit-content", "border": `solid 3px ${template.color}`, "borderRadius": "5px" }}
                        href={template.url}
                        download
                        target="_blank"
                    >
                        <div height>{template.icon}</div>
                        <div className="font-medium fs-4 m-auto mx-4" style={{ color: template.color }}>
                            {template.name}
                        </div>

                    </a>
                ))}

            </div>

        </div>


    )


}
