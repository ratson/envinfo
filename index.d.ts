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
  json?: boolean;
  markdown?: boolean;
  showNotFound?: boolean;
};

export function main(args: MainProps, options: MainOptions): Promise<string>;
export function run(args: MainProps, options: MainOptions): Promise<string>;
