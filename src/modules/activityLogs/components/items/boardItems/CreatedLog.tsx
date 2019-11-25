import dayjs from 'dayjs';
import {
  ActivityDate,
  FlexBody,
  FlexCenterContent
} from 'modules/activityLogs/styles';
import { IActivityLog } from 'modules/activityLogs/types';
import Tip from 'modules/common/components/Tip';
import React from 'react';

type Props = {
  activity: IActivityLog;
};

class CreatedLog extends React.Component<Props> {
  renderContent = () => {
    const { activity } = this.props;

    const { contentType, createdByDetail } = activity;

    let userName = 'Unknown';

    if (createdByDetail.details) {
      userName = createdByDetail.details.fullName || 'Unknown';
    }

    return (
      <span>
        <strong>{userName}</strong> created {contentType}
      </span>
    );
  };

  render() {
    const { createdAt } = this.props.activity;

    return (
      <FlexCenterContent>
        <FlexBody>{this.renderContent()}</FlexBody>
        <Tip text={dayjs(createdAt).format('llll')}>
          <ActivityDate>
            {dayjs(createdAt).format('MMM D, h:mm A')}
          </ActivityDate>
        </Tip>
      </FlexCenterContent>
    );
  }
}

export default CreatedLog;