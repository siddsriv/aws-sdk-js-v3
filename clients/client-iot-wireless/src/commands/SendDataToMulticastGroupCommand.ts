// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { SendDataToMulticastGroupRequest, SendDataToMulticastGroupResponse } from "../models/models_1";
import { de_SendDataToMulticastGroupCommand, se_SendDataToMulticastGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendDataToMulticastGroupCommand}.
 */
export interface SendDataToMulticastGroupCommandInput extends SendDataToMulticastGroupRequest {}
/**
 * @public
 *
 * The output of {@link SendDataToMulticastGroupCommand}.
 */
export interface SendDataToMulticastGroupCommandOutput extends SendDataToMulticastGroupResponse, __MetadataBearer {}

/**
 * <p>Sends the specified data to a multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, SendDataToMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, SendDataToMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // SendDataToMulticastGroupRequest
 *   Id: "STRING_VALUE", // required
 *   PayloadData: "STRING_VALUE", // required
 *   WirelessMetadata: { // MulticastWirelessMetadata
 *     LoRaWAN: { // LoRaWANMulticastMetadata
 *       FPort: Number("int"),
 *     },
 *   },
 * };
 * const command = new SendDataToMulticastGroupCommand(input);
 * const response = await client.send(command);
 * // { // SendDataToMulticastGroupResponse
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendDataToMulticastGroupCommandInput - {@link SendDataToMulticastGroupCommandInput}
 * @returns {@link SendDataToMulticastGroupCommandOutput}
 * @see {@link SendDataToMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link SendDataToMulticastGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class SendDataToMulticastGroupCommand extends $Command
  .classBuilder<
    SendDataToMulticastGroupCommandInput,
    SendDataToMulticastGroupCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "SendDataToMulticastGroup", {})
  .n("IoTWirelessClient", "SendDataToMulticastGroupCommand")
  .f(void 0, void 0)
  .ser(se_SendDataToMulticastGroupCommand)
  .de(de_SendDataToMulticastGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDataToMulticastGroupRequest;
      output: SendDataToMulticastGroupResponse;
    };
    sdk: {
      input: SendDataToMulticastGroupCommandInput;
      output: SendDataToMulticastGroupCommandOutput;
    };
  };
}
