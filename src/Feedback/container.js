import compose from "recompose/compose";
import withState from "recompose/withState";
import withHandlers from "recompose/withHandlers";
import Feedback from "./presentational";
import base64 from "base-64";
import {
  generateCtColumnMappings,
  generateDtColumnMappings,
  generateDataImport
} from "../utils/colMappings";

export default compose(
  withState("isOpen", "setIsOpen", false),
  withState("isMinimized", "setIsMinimized", false),
  withState("email", "setEmail", "gareth.lowrie@communicatorcorp.com"),
  withState("name", "setName", "Gareth Lowrie"),
  withHandlers({
    onWidgetClick: ({ setIsMinimized, setIsOpen }) => () => {
      setIsOpen(true);
      //setIsMinimized(false);
    },
    onCloseClick: ({ setIsOpen, setIsMinimized }) => () => {
      setIsOpen(false);
      //setIsMinimized(true);
    },
    submitFeedback: () => data => {
      const head = new Headers();
      head.append("Content-Type", "text/xml");
      head.append(
        "Authorization",
        "Basic " + base64.encode(username + ":" + password)
      );

      const newData = json2xml(data);
      console.log("about to send " + newData);
      fetch(url, {
        body: newData,
        method: "POST",
        //mode: "cors",
        headers: head
        //credentials: "include"
      })
        .then(response => console.log(response))
        .catch(function(error) {
          console.log(error);
        });
      //.done();
    }
  }),
  withHandlers({
    onSubmit: ({ email, submitFeedback }) => (message, messages) => {
      const cols = generateCtColumnMappings(email);
      const dataImport = generateDataImport(cols, CONTACT);

      submitFeedback(dataImport);
    }
  })
)(Feedback);
