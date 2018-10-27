import { IWebPartContext } from '@microsoft/sp-webpart-base';

export interface IConsiriWebPartProps {
  description: string;
  message: string;
  directLineSecret: string;
  title: string;
  placeholderText: string;
  titleBarBackgroundColor : string;
  botMessagesBackgroundColor: string;
  botMessagesForegroundColor: string;
  userMessagesBackgroundColor: string;
  userMessagesForegroundColor: string;
  context: IWebPartContext;
}
