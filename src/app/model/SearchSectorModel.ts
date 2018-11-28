export class SearchSectorModel {
  area_code: string;
  area_name: string;
  average_detached_house_price: number;
  average_flat_price: number;
  average_semi_detached_house_price: number;
  average_journey_time: number;
  distance_to_work: number;
  facilities_score: number;
  good_schools: number;
  highest_house_price: number;
  lowest_house_price: number;
  outstanding_schools: number;
  poor_schools: number;
  postcode: string;
  primary_schools: number;
  private_schools: number;
  safety_score: number;
  school_score: number;
  secondary_schools: number;
  sector_code: string;
  sector_name: string;
  stations: string;
  stations_count: number;
  total_schools: number;
  travel_score: number;
  facilities_score_rating: string;
  facilities_score_stars: number;
  facilities_stars: Array<number>;
  facilities_grey_stars: Array<number>;
  safety_score_rating: string;
  safety_score_stars: number;
  safety_stars: Array<number>;
  safety_grey_stars: Array<number>;
  travel_score_rating: string;
  travel_score_stars: number;
  travel_stars: Array<number>;
  travel_grey_stars: Array<number>;
  school_score_rating: string;
  school_score_stars: number;
  school_stars: Array<number>;
  school_grey_stars: Array<number>;
  total_score: number;
  ref_postcode_lat: number;
  ref_postcode_lng: number;
}
