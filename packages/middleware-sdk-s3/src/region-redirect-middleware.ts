import {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable,
} from "@smithy/types";

/**
 * @internal
 */
export function regionRedirectMiddleware(): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: InitializeHandler<any, Output>): InitializeHandler<any, Output> =>
    async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
      console.log("Region Redirect Middleware before next");
      try {
        const response = next({ ...args });
        console.log("Region Redirect Middleware after next");
        return response;
      } catch (err) {
        console.log("Region redirect middleware caught an error: ", err);
        throw err;
      }
    };
}

/**
 * @internal
 */
export const regionRedirectMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectMiddleware",
  override: true,
};

/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRegionRedirectMiddlewarePlugin = (unused: any): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(regionRedirectMiddleware(), regionRedirectMiddlewareOptions);
  },
});
