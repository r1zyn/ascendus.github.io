import type { BaseContext } from "next/dist/shared/lib/utils";
import type { NextComponentType } from "next";

export type NextComponent<Props = {}> = NextComponentType<BaseContext, {}, Props>;
export type PageSection = "Home" | "About" | "Experience";