'use client';

import { ChevronsExpandVertical } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import TimePicker from "./TimePicker";
import DatePickerComponent from "./DatePicker";
// import { useState } from "react";


const BookApoinmentForm = ({ doctor, bookNewApointmentAction }) => {
  // const [datePicker, setDatePicker] = useState(null);
  // const [timePicker, setTimePicker] = useState(null);
  // const {name, _id} = doctor;

  return (
    <div>
      <form action={bookNewApointmentAction} className="flex flex-col gap-4">
        <TextField className="w-full" name="name" type="text">
          <Label>Name</Label>
          <Input required="ture" placeholder="Enter your name" />
        </TextField>
        <TextField className="w-full" name="email" type="email">
          <Label>Email</Label>
          <Input required="ture" placeholder="Enter your email" />
        </TextField>
        <TextField className="w-full" name="phone" type="tel">
          <Label>Phone</Label>
          <Input required="ture" placeholder="Enter your phone number" />
        </TextField>
        <Select
          name="sex"
          className="w-full"
          placeholder="Select one"
          required="ture"
        >
          <Label>Sex</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator className="size-3">
              <ChevronsExpandVertical />
            </Select.Indicator>
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="male" textValue="Male">
                Male
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="female" textValue="Fe">
                Female
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="others" textValue="others">
                Others
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        <div required="ture" className="flex justify-between items-center">
          <DatePickerComponent name="apointmentDate"></DatePickerComponent>
          <TimePicker name="apointmentTime"></TimePicker>
        </div>
        <TextField className="w-full" name="message">
          <Label>Reson</Label>
          <Input required="ture" placeholder="Enter your message" />
        </TextField>
        <Modal.Footer>
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">Done</Button>
        </Modal.Footer>
      </form>
    </div>
  );
};

export default BookApoinmentForm;
