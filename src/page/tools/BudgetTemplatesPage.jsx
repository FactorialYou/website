import React from "react";
import budget from "../../images/budget.png"
import DownloadFileButton from "../../components/DownloadFileButton";


export default function BudgetTemplatesPage() {

    const templates = [
        {
            label: 'Google Sheet',
            url: 'https://docs.google.com/spreadsheets/d/1-mHV9boiTssF9fBKRgPpe8gYevaD72986dH5Xn5McF8/copy?usp=sharing',
            type: "google-sheets",
        },
        {
            label: 'Excel',
            url: '/BudgetTemplate.xlsx',
            type: "excel",
        },

    ];

    return (

        <div>

            <p>Take control of your finances with our free, easy-to-use budget templates. Whether you are familiar with personal finance or just getting started with budgeting, these templates are designed to help you plan, track, and stay on top of your money!</p>
            <div className="my-5">
                <img src={budget} class="img-fluid img-thumbnail rounded w-100" />
            </div>

            <div className="d-flex flex-wrap justify-content-evenly" style={{ "gap": "10px" }}>

                {templates.map((template, idx) => (
                    <DownloadFileButton {...template} key={idx}/>
                ))}

            </div>

        </div>


    )


}
