import { SSOToken } from "@smithy/shared-ini-file-loader";

import { FromSsoInit } from "./fromSso";
import { getSsoOidcClient } from "./getSsoOidcClient";

/**
 * Returns a new SSO OIDC token from ssoOids.createToken() API call.
 * @internal
 */
export const getNewSsoOidcToken = async (ssoToken: SSOToken, ssoRegion: string, init: FromSsoInit = {}) => {
  // @ts-ignore Cannot find module '@aws-sdk/client-sso-oidc'
  const { CreateTokenCommand } = await import("@aws-sdk/client-sso-oidc");

  const ssoOidcClient = await getSsoOidcClient(ssoRegion, init);
  return ssoOidcClient.send(
    new CreateTokenCommand({
      clientId: ssoToken.clientId,
      clientSecret: ssoToken.clientSecret,
      refreshToken: ssoToken.refreshToken,
      grantType: "refresh_token",
    })
  );
};
