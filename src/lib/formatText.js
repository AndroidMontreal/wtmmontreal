import { v4 as uuidv4 } from 'uuid';

const formatText = (text) => {
  // You can add more patterns here for different formatting
  const patterns = [
    // Bold text with **
    {
      regex: /(\*\*.*?\*\*)/g,
      transform: (match) => (
        <strong key={uuidv4()}>{match.slice(2, -2)}</strong>
      ),
    },
    // You could add italic with _text_ for example
    {
      regex: /(_.*?_)/g,
      transform: (match) => <em>{match.slice(1, -1)}</em>,
    },
  ];

  let parts = [text];

  patterns.forEach(({ regex, transform }) => {
    parts = parts.flatMap((part) => {
      if (typeof part === 'string') {
        return part.split(regex).map((subPart, index) => {
          if (regex.test(subPart)) {
            return transform(subPart);
          }
          return subPart;
        });
      }
      return part;
    });
  });

  return parts;
};

export default formatText;
