type MainProps = {
  Binaries?: string[];
  IDEs?: string[];
  Languages?: string[];
  Managers?: string[];
  SDKs?: string[];
  System?: string[];
  Utilities?: string[];
  npmGlobalPackages?: string[];
  npmPackages?: string[];
};
type MainOptions = {
  console?: boolean;
  title?: string;
  transform?: <T extends Record<string, unknown>>(x: T) => T;
};

export function main(args: MainProps, options: MainOptions): string;
export function run(args: MainProps, options: MainOptions): string;
