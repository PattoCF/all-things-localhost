import React from "react";
import { /* useCMA, */ useSDK } from "@contentful/react-apps-toolkit";
import JsonObject from "../field_types/jsonObject";
import ShortText from "../field_types/shortText";
import ShortTextList from "../field_types/shortTextList";
import LongText from "../field_types/longText";
import RichtText from "../field_types/richtText";
import NumberDecimal from "../field_types/numberDecimal";
import NumberInteger from "../field_types/numberInteger";
import DateTime from "../field_types/dateTime";
import Location from "../field_types/location";
import Boolean from "../field_types/boolean";
import EntryReference from "../field_types/entryReference";
import EntryReferenceMany from "../field_types/entryReferenceMany";
import MediaReference from "../field_types/mediaReference";
import MediaReferenceMany from "../field_types/mediaReferenceMany";

const Field = () => {
  const sdk = useSDK();

  // const cma = useCMA();

  let returnObject = undefined;

  switch (sdk.field.type) {
    case "Object":
      returnObject = <JsonObject sdk={sdk}></JsonObject>;
      break;
    case "Symbol":
      returnObject = <ShortText sdk={sdk}></ShortText>;
      break;
    case "Array":
      switch (sdk.field.items.type) {
        case "Symbol":
          returnObject = <ShortTextList sdk={sdk}></ShortTextList>;
          break;
        case "Link":
          switch (sdk.field.items.linkType) {
            case "Entry":
              returnObject = (
                <EntryReferenceMany sdk={sdk}></EntryReferenceMany>
              );
              break;

            case "Asset":
              returnObject = (
                <MediaReferenceMany sdk={sdk}></MediaReferenceMany>
              );
              break;
            default: <div>No Link could be rendered</div>
              break;
          }

          break;
        default: <div>No Link could be rendered</div>
          break;
      }
      break;

    case "Text":
      returnObject = <LongText sdk={sdk}></LongText>;
      break;
    case "RichText":
      returnObject = <RichtText sdk={sdk}></RichtText>;
      break;
    case "Number":
      returnObject = <NumberDecimal sdk={sdk}></NumberDecimal>;
      break;
    case "Integer":
      returnObject = <NumberInteger sdk={sdk}></NumberInteger>;
      break;
    case "Date":
      returnObject = <DateTime sdk={sdk}></DateTime>;
      break;
    case "Location":
      returnObject = <Location sdk={sdk}></Location>;
      break;
    case "Boolean":
      returnObject = <Boolean sdk={sdk}></Boolean>;
      break;
    case "Link":
      switch (sdk.field.linkType) {
        case "Entry":
          returnObject = <EntryReference sdk={sdk}></EntryReference>;
          break;
        case "Asset":
          returnObject = <MediaReference sdk={sdk}></MediaReference>;
          break;
        default: <div>No Link could be rendered</div>
          break;
      }
      break;

    default: <div>Nothing could be rendered</div>
      break;
  }

  return <div>{returnObject}</div>;
};

export default Field;
