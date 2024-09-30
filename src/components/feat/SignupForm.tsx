"use client";

import { useId, useState } from "react";

import { TextField } from "@/components/ui/TextField";
import { Text } from "@/components/ui/Text";
import { ButtonLink } from "@/components/feat/ButtonLink";

export function SignupForm() {
  const nameId = useId();
  const [name, setName] = useState("");

  return (
    <div>
      <Text as="h1" variant="display/large">
        Create your account
      </Text>

      <form>
        <TextField
          id={nameId}
          label="Name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <ButtonLink href="/login" variant="filled">
          Login
        </ButtonLink>
      </form>
    </div>
  );
}
