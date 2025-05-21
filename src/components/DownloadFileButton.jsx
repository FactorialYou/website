import { FaRegFile } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { SiGooglesheets } from 'react-icons/si';
import { v4 as uuid } from 'uuid';

export default function DownloadFileButton({label, type, url, className, key}) {

  let Icon;
  let color;

  switch(type){
    case "google-sheets":
      color = "green"
      Icon = SiGooglesheets
      break;
    case "excel":
      color = "green"
      Icon = RiFileExcel2Fill
      break;
    case "pdf":
      color = "IndianRed"
      Icon = GrDocumentPdf
      break;
    default:
      color = "var(--bs-purple)"
      Icon = FaRegFile
  }


  return (
    <a
      key={key}
      className="d-flex shadow tems-center justify-between p-2 m-2"
      style={{ "width": "fit-content", "border": `solid 3px ${color}`, "borderRadius": "5px" }}
      href={url}
      download
      target="_blank"
    >
      <Icon size="20px" color={color}/>
      <div className="font-medium fs-6 m-auto mx-4" style={{ color }}>
        {label}
      </div>

    </a>
  );
}
