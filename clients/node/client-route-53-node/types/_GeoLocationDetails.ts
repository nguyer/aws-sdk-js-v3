/**
 * <p>A complex type that contains the codes and full continent, country, and subdivision names for the specified <code>geolocation</code> code.</p>
 */
export interface _GeoLocationDetails {
  /**
   * <p>The two-letter code for the continent.</p>
   */
  ContinentCode?: string;

  /**
   * <p>The full name of the continent.</p>
   */
  ContinentName?: string;

  /**
   * <p>The two-letter code for the country.</p>
   */
  CountryCode?: string;

  /**
   * <p>The name of the country.</p>
   */
  CountryName?: string;

  /**
   * <p>The code for the subdivision. Route 53 currently supports only states in the United States.</p>
   */
  SubdivisionCode?: string;

  /**
   * <p>The full name of the subdivision. Route 53 currently supports only states in the United States.</p>
   */
  SubdivisionName?: string;
}

export type _UnmarshalledGeoLocationDetails = _GeoLocationDetails;
