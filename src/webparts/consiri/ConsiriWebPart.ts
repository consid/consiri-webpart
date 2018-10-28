import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ConsiriWebPartStrings';
import Consiri, { ConsiriProps } from './components/Consiri';
import { ConsiriWebPartProps } from './ConsiriWebPartProps';

export default class ConsiriWebPart extends BaseClientSideWebPart<ConsiriWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ConsiriProps> = React.createElement(
      Consiri,
      { ...this.properties, context: this.context }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BotConnectionGroupName,
              groupFields: [
                PropertyPaneTextField('directLineSecret', {
                  label: strings.DirectLineSecretFieldLabel
                })
              ]
            },
            {
              groupName: strings.AppearanceGroupName,
              groupFields: [
                PropertyPaneTextField('chatTitle', {
                  label: strings.ChatTitleFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
