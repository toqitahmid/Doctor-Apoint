"use client";

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
import { useEffect, useState } from "react";
import { parseDate, Time } from "@internationalized/date";
import { redirect } from "next/navigation";

const EditApointmentsInfo = ({ appointment, onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState(null);
  const [apointmentDate, setApointmentDate] = useState(null);
  const [apointmentTime, setApointmentTime] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Runs ONLY when `appointment` changes — not on every render
  useEffect(() => {
    if (!appointment) return;

    setName(appointment.name ?? "");
    setEmail(appointment.email ?? "");
    setPhone(appointment.phone ?? "");
    setSex(appointment.sex ?? null);
    setMessage(appointment.message ?? "");

    if (appointment.apointmentDate) {
      const dateOnly = appointment.apointmentDate.split("T")[0];
      setApointmentDate(parseDate(dateOnly));
    }

    if (appointment.apointmentTime) {
      const [hour, minute] = appointment.apointmentTime.split(":").map(Number);
      setApointmentTime(new Time(hour, minute));
    }
  }, [appointment]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const updateApoint = {
      name,
      email,
      phone,
      sex,
      apointmentDate: apointmentDate ? apointmentDate.toString() : null,
      apointmentTime: apointmentTime
        ? `${String(apointmentTime.hour).padStart(2, "0")}:${String(apointmentTime.minute).padStart(2, "0")}`
        : null,
      message,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/apointments/${appointment._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateApoint),
        },
      );

      if (!res.ok) throw new Error("Failed to update appointment");

      const data = await res.json();
      onSuccess?.(data);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
        <TextField className="w-full" name="name" type="text" isRequired>
          <Label>Name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </TextField>

        <TextField className="w-full" name="email" type="email" isRequired>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </TextField>

        <TextField className="w-full" name="phone" type="tel" isRequired>
          <Label>Phone</Label>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </TextField>

        <Select
          name="sex"
          className="w-full"
          placeholder="Select one"
          isRequired
          selectedKey={sex}
          onSelectionChange={(key) => setSex(key)}
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
              <ListBox.Item id="female" textValue="Female">
                Female
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="others" textValue="Others">
                Others
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <div className="flex justify-between items-center gap-4">
          <DatePickerComponent
            name="apointmentDate"
            value={apointmentDate}
            onChange={setApointmentDate}
          />
          <TimePicker
            name="apointmentTime"
            value={apointmentTime}
            onChange={setApointmentTime}
          />
        </div>

        <TextField className="w-full" name="message">
          <Label>Reason</Label>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </TextField>

        {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

        <Modal.Footer>
          <Button slot="close" variant="secondary" type="button">
            Cancel
          </Button>
          <Button type="submit" isDisabled={loading}>
            {loading ? "Saving..." : "Done"}
          </Button>
        </Modal.Footer>
      </form>
    </div>
  );
};

export default EditApointmentsInfo;
