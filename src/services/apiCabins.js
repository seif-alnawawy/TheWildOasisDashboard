import supabase, { supabaseStoragePath } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(`from get cabins => ${error.message}`);
    throw new Error(`from get cabins => ${error.message}`);
  }
  return data;
}
export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = `${supabaseStoragePath}/cabin-images/${imageName}`;
  // Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select()
    .single();
  if (error) {
    console.error(`from create cabins => ${error.message}`);
    throw new Error(`from create cabins => ${error.message}`);
  }

  // Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(`from upload cabin image => ${storageError.message}`);
    throw new Error("Cabin image could not be uploaded. please try again");
  }
  return data;
}
export async function updateCabin({ id, newCabin }) {
  const { data, error } = await supabase
    .from("cabins")
    .update({ ...newCabin })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(`from update cabins => ${error.message}`);
    throw new Error("Couldn't update cabin. please try again");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(`from delete cabins => ${error.message}`);
    throw new Error(`from delete cabins => ${error.message}`);
  }
  return data;
}
