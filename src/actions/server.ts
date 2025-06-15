"use server";

import { createClient } from "@/lib/supabase/server";

export async function getAllProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    return { status: false, message: error.message, data: null };
  }
  return { status: true, message: "Success", data };
}

export async function getFeaturedProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("isFeatured", true);
  if (error) {
    return { status: false, message: error.message, data: null };
  }
  return { status: true, message: "Success", data };
}

export async function getProjectBySlug(slug: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug);
  if (error) {
    return { status: false, message: error.message, data: null };
  }
  return { status: true, message: "Success", data };
}
