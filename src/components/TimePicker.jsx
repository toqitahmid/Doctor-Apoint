'use client'
import { Label, TimeField } from "@heroui/react";
const TimePicker = ({name}) => {
  return (
    <div>
      <TimeField name={name} className="w-[150px]">
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input>
            {(segment) => <TimeField.Segment segment={segment} />}
          </TimeField.Input>
        </TimeField.Group>
      </TimeField>
    </div>
  );
};

export default TimePicker;
