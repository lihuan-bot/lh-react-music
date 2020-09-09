import request from "@/network/request";
export const getTopBanners = () => {
return request({
    url: "/banner",
});
};
