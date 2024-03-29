// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "Vimeo.proto" (package "muni", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { VimeoService } from "./Vimeo";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ListVideoVideosResponse } from "./Vimeo";
import type { ListVideoVideosRequest } from "./Vimeo";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service muni.VimeoService
 */
export interface IVimeoServiceClient {
    /**
     * @generated from protobuf rpc: ListVideoVideos(muni.ListVideoVideosRequest) returns (muni.ListVideoVideosResponse);
     */
    listVideoVideos(input: ListVideoVideosRequest, options?: RpcOptions): UnaryCall<ListVideoVideosRequest, ListVideoVideosResponse>;
}
/**
 * @generated from protobuf service muni.VimeoService
 */
export class VimeoServiceClient implements IVimeoServiceClient, ServiceInfo {
    typeName = VimeoService.typeName;
    methods = VimeoService.methods;
    options = VimeoService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: ListVideoVideos(muni.ListVideoVideosRequest) returns (muni.ListVideoVideosResponse);
     */
    listVideoVideos(input: ListVideoVideosRequest, options?: RpcOptions): UnaryCall<ListVideoVideosRequest, ListVideoVideosResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListVideoVideosRequest, ListVideoVideosResponse>("unary", this._transport, method, opt, input);
    }
}
