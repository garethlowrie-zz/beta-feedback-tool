import compose from "recompose/compose";
import withState from "recompose/withState";
import withHandlers from "recompose/withHandlers";
import Feedback from "./presentational";

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
      // Send data to server
    }
  }),
  withHandlers({
    onSubmit: ({ email, submitFeedback }) => (message, messages) => {
      submitFeedback(dataImport);
    }
  })
)(Feedback);
