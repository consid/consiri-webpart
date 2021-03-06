import * as React from 'react';
import { Chat } from "botframework-webchat";
import { ConsiriWebPartProps } from '../ConsiriWebPartProps';
import styles from "./Consiri.module.scss";

export interface ConsiriProps extends ConsiriWebPartProps {
}

export interface ConsiriState {
  loginName: string;
}

export default class Consiri extends React.Component<ConsiriProps, ConsiriState> {
  constructor(props: ConsiriProps) {
    super(props);
    this.state = { loginName: props.context.pageContext.user.loginName };
  }

  public render(): JSX.Element {
    const { directLineSecret, chatTitle, showUploadButton } = this.props;
    const { loginName } = this.state;
    if(!directLineSecret) return <div>Setup webpart properties</div>;
    return <div className={styles.consiri}>
         <Chat bot={{ id: null }} directLine={{ secret: directLineSecret }} user={{ id: loginName }} adaptiveCardsHostConfig={null}
            chatTitle={chatTitle} showUploadButton={showUploadButton} />
      </div>;
  }
}