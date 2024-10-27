import renderer from "react-test-renderer";

import AccommodationCard from "../../../../src/components/AccommodationCard";
import EPropertyType from "../../../../src/model/EPropertyType";

describe("AccommodationCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <AccommodationCard
          id=""
          title=""
          propertyType={EPropertyType.Condo}
          price={0}
          description=""
          rented={false}
          address={undefined}
          availableDate=""
          images={[]}
          userId=""
          createdAt=""
          User={{ name: "test" }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
