import { _HlsEncryption, _UnmarshalledHlsEncryption } from "./_HlsEncryption";
import {
  _StreamSelection,
  _UnmarshalledStreamSelection
} from "./_StreamSelection";

/**
 * An HTTP Live Streaming (HLS) packaging configuration.
 */
export interface _HlsPackage {
  /**
   * This setting controls how ad markers are included in the packaged OriginEndpoint.
   * "NONE" will omit all SCTE-35 ad markers from the output.
   * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
   * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
   * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
   * messages in the input source.
   *
   */
  AdMarkers?: "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH" | string;

  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   *
   */
  AdTriggers?:
    | Array<
        | "SPLICE_INSERT"
        | "BREAK"
        | "PROVIDER_ADVERTISEMENT"
        | "DISTRIBUTOR_ADVERTISEMENT"
        | "PROVIDER_PLACEMENT_OPPORTUNITY"
        | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
        | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
        | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
        | string
      >
    | Iterable<
        | "SPLICE_INSERT"
        | "BREAK"
        | "PROVIDER_ADVERTISEMENT"
        | "DISTRIBUTOR_ADVERTISEMENT"
        | "PROVIDER_PLACEMENT_OPPORTUNITY"
        | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
        | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
        | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
        | string
      >;

  /**
   * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
   * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
   * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
   * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
   * messages of the types specified in AdTriggers that do not contain delivery restrictions will
   * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
   * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
   * and are always treated as ads if specified in AdTriggers.
   *
   */
  AdsOnDeliveryRestrictions?:
    | "NONE"
    | "RESTRICTED"
    | "UNRESTRICTED"
    | "BOTH"
    | string;

  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: _HlsEncryption;

  /**
   * When enabled, an I-Frame only stream will be included in the output.
   */
  IncludeIframeOnlyStream?: boolean;

  /**
   * The HTTP Live Streaming (HLS) playlist type.
   * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
   * entry will be included in the media playlist.
   *
   */
  PlaylistType?: "NONE" | "EVENT" | "VOD" | string;

  /**
   * Time window (in seconds) contained in each parent manifest.
   */
  PlaylistWindowSeconds?: number;

  /**
   * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag
   * inserted into manifests. Additionally, when an interval is specified
   * ID3Timed Metadata messages will be generated every 5 seconds using the
   * ingest time of the content.
   * If the interval is not specified, or set to 0, then
   * no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no
   * ID3Timed Metadata messages will be generated. Note that irrespective
   * of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,
   * it will be passed through to HLS output.
   *
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * Duration (in seconds) of each fragment. Actual fragments will be
   * rounded to the nearest multiple of the source fragment duration.
   *
   */
  SegmentDurationSeconds?: number;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _StreamSelection;

  /**
   * When enabled, audio streams will be placed in rendition groups in the output.
   */
  UseAudioRenditionGroup?: boolean;
}

export interface _UnmarshalledHlsPackage extends _HlsPackage {
  /**
   * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
   * ad markers are output.  Specify multiple items to create ad markers for all of the included
   * message types.
   *
   */
  AdTriggers?: Array<
    | "SPLICE_INSERT"
    | "BREAK"
    | "PROVIDER_ADVERTISEMENT"
    | "DISTRIBUTOR_ADVERTISEMENT"
    | "PROVIDER_PLACEMENT_OPPORTUNITY"
    | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY"
    | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY"
    | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY"
    | string
  >;

  /**
   * An HTTP Live Streaming (HLS) encryption configuration.
   */
  Encryption?: _UnmarshalledHlsEncryption;

  /**
   * A StreamSelection configuration.
   */
  StreamSelection?: _UnmarshalledStreamSelection;
}
