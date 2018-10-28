declare interface IConsiriWebPartStrings {
  PropertyPaneDescription: string;
  BotConnectionGroupName: string;
  AppearanceGroupName: string;
  DirectLineSecretFieldLabel: string;
  ChatTitleFieldLabel: string;
}

declare module 'ConsiriWebPartStrings' {
  const strings: IConsiriWebPartStrings;
  export = strings;
}
