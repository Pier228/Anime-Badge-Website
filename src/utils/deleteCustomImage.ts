import defaultData from "@/interfaces/DefaultData";
import IDeleteCustomImage from "@/interfaces/IDeleteCustomImage";
import Caching from "@/services/CachingService";

const deleteCustomImage = ({
  customImages,
  srcToRemove,
  setNewData,
  setSelectedObject,
  setSelectedName,
}: IDeleteCustomImage) => {
  let data = Caching.getData("anime-badge-data");

  let newData = customImages.filter((item) => item.src !== srcToRemove);
  setNewData(newData);
  Caching.cacheData("danceFloorCustom", newData);

  if (data.danceFloor.src == srcToRemove) {
    data.danceFloor = defaultData.danceFloor;
    Caching.cacheData("anime-badge-data", data);
    setSelectedObject(data.danceFloor);
    setSelectedName(data.danceFloor);
  }
};

export default deleteCustomImage;
