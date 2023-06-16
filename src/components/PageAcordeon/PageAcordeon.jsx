import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CopyBlock, dracula } from "react-code-blocks";

export default function SimpleAccordion({ pages }) {
  return (
    <div>
      {pages.map((p, i) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{p.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CopyBlock
                text={p.code}
                language={p.language}
                showLineNumbers={true}
                startingLineNumber={0}
                theme={dracula}
                codeBlock
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
