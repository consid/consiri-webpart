import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import Consiri from './components/Consiri';
import { IConsiriWebPartProps } from './IConsiriWebPartProps';

export default class ConsiriWebPart extends BaseClientSideWebPart<IConsiriWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IConsiriWebPartProps > = React.createElement(
      Consiri,
      { ...this.properties, message: '', context: this.context }
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
            description: 'Here you can set various properties and settings regarding how your bot chat web part will look visually and functionally work'
          },
          groups: [
            {
              groupName: 'Bot Connection',
              groupFields: [
                PropertyPaneTextField('directLineSecret', {
                  label: 'Direct Line Secret'
                })
              ]
            },
            {
              groupName: 'Appearance',
              groupFields: [
                PropertyPaneTextField('title', {
                  label: 'Title'
                }),
                PropertyPaneTextField('placeholderText', {
                  label: 'Placeholder text'
                }),
                PropertyPaneTextField('titleBarBackgroundColor', {
                  label: 'Title bar background color',
                  onGetErrorMessage: this._validateColorPropertyAsync.bind(this), // validation function
                  deferredValidationTime: 500 // delay after which to run the validation function
                }),
                PropertyPaneTextField('botMessagesBackgroundColor', {
                  label: 'Bot messages background color',
                  onGetErrorMessage: this._validateColorPropertyAsync.bind(this), // validation function
                  deferredValidationTime: 500 // delay after which to run the validation function
                }),
                PropertyPaneTextField('botMessagesForegroundColor', {
                  label: 'Bot messages foreground color',
                  onGetErrorMessage: this._validateColorPropertyAsync.bind(this), // validation function
                  deferredValidationTime: 500 // delay after which to run the validation function
                }),
                PropertyPaneTextField('userMessagesBackgroundColor', {
                  label: 'User messages background color',
                  onGetErrorMessage: this._validateColorPropertyAsync.bind(this), // validation function
                  deferredValidationTime: 500 // delay after which to run the validation function
                }),
                PropertyPaneTextField('userMessagesForegroundColor', {
                  label: 'User messages foreground color',
                  onGetErrorMessage: this._validateColorPropertyAsync.bind(this), // validation function
                  deferredValidationTime: 500 // delay after which to run the validation function
                })
              ]
            }
          ]
        }
      ]
    };
  }

  private _validateColorPropertyAsync(value: string): string {
    var colorRegex = /^([a-zA-Z0-9]){6}$/;
    if (!value || colorRegex.test(value) == false) {
      return "Please enter a valid 6 character hex color value";
    }

    return "";
  }
}
