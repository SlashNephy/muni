#!/usr/bin/env bash

protoc \
  --go_out='paths=source_relative:../backend/pb' \
  --go-grpc_out='paths=source_relative:../backend/pb' \
  --ts_out='../frontend/src/pb' \
  ./*.proto
