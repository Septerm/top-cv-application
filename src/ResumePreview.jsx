import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./Resume";

export default function ResumePreview() {

    return (
        <div>
            <PDFViewer width={"100%" } height={"800"}> 
                <Resume/>
            </PDFViewer>
        </div>
    )
}