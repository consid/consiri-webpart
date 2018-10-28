import { IWebPartContext } from '@microsoft/sp-webpart-base';

export interface ConsiriWebPartProps {
  description: string;
  directLineSecret: string;
  chatTitle: string;
  context: IWebPartContext;
}
