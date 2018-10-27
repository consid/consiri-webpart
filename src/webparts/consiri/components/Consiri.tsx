import * as React from 'react';
import styles from './Consiri.module.scss';
import { IConsiriProps } from './IConsiriProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Consiri extends React.Component<IConsiriProps, {}> {
  public render(): React.ReactElement<IConsiriProps> {
    return (
      <div className={ styles.consiri }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
