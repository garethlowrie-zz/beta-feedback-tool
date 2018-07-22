import compose from "recompose/compose";
import withState from "recompose/withState";
import withHandlers from "recompose/withHandlers";
import Chat from "./presentational";

const pad = value => {
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
};

export default compose(
  withState("messages", "setMessages", []),
  withState("inputValue", "setInputValue", ""),
  withHandlers({
    onChange: ({ setInputValue }) => e => {
      setInputValue(e.target.value);
    },
    onKeyPress: ({
      name,
      inputValue,
      setInputValue,
      messages,
      setMessages,
      onSubmit
    }) => e => {
      if (e.key === "Enter") {
        const date = new Date();
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());

        const message = {
          name,
          message: inputValue,
          date,
          time: `${hours}:${minutes}`
        };

        setMessages([...messages, message]);
        setInputValue("");

        if (onSubmit) {
          onSubmit(message, messages);
        }
      }
    }
  })
)(Chat);
