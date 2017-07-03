/* @flow */

type Update = {
  type: 'message',
  chatId: number,
  time: number,
  text: string,
} | {
  type: 'photo',
  chatId: number,
  time: number,
  fileId: number,
};

const getPayload1 = (update: Update) => {
  switch (update.type) {
    case 'message': return update.text;
    case 'wtf': return update.fileId;
    default:
      (update.type: empty);
  }
};

const getPayload2 = (update: Update) => {
  switch (update.type) {
    case 'message': return update.text;
    case 'photo': return update.text;
    default:
      (update.type: empty);
  }
};
