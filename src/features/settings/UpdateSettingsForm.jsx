import FormRow from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";
import useSettings from "./useSettings";

import useUpdateSettings from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { isLoading, error, settings } = useSettings();

  const { isPending: isUpdating, mutate: updatesettings } = useUpdateSettings();

  function handleUpdate({ e, field }) {
    const { value } = e.target;

    if (!value) return;
    updatesettings({ [field]: value });
  }

  if (error) {
    return <p>Could not load settings.</p>;
  } else if (isLoading) {
    return (
      <div className="flex justify-center mt-8">
        <Spinner />
      </div>
    );
  } else {
    return (
      <form className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
        <FormRow
          inputType={"number"}
          defaultValue={settings.minBookingsLength}
          onBlur={(e) => handleUpdate({ e, field: "minBookingsLength" })}
          disabled={isUpdating}
        >
          Minimum nights/booking
        </FormRow>

        <FormRow
          inputType={"number"}
          defaultValue={settings.maxBookingsLength}
          onBlur={(e) => handleUpdate({ e, field: "maxBookingsLength" })}
          disabled={isUpdating}
        >
          Maximum nights/booking
        </FormRow>

        <FormRow
          inputType={"number"}
          defaultValue={settings.maxGuestsPerBooking}
          onBlur={(e) => handleUpdate({ e, field: "maxGuestsPerBooking" })}
          disabled={isUpdating}
        >
          Maximum guests/booking
        </FormRow>

        <FormRow
          inputType={"number"}
          defaultValue={settings.breakfastPrice}
          onBlur={(e) => handleUpdate({ e, field: "breakfastPrice" })}
          disabled={isUpdating}
        >
          Breakfast price
        </FormRow>
      </form>
    );
  }
}

export default UpdateSettingsForm;
