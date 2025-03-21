import { FcInfo } from "../interfaces/infoInterface";

export class InfoModel {
  private static data: FcInfo[] = [
    {
      id: 1,
      name: "Flyckt Coding CLI",
      description: "A CLI tool for generating express templates quickly and easily.",
      version: "1.0.0",
      website: "https://flycktcoding.com",
      author: "Ludvig Flyckt",
    },
    {
      id: 2,
      name: "Example 2",
      description: "Another example entry",
      version: "1.0.1",
      website: "https://example.com",
      author: "John Doe",
    },
  ];

  public static getInfo(): FcInfo[] {
    return this.data;
  }

  public static getInfoById(id: number): FcInfo | undefined {
    return this.data.find(item => item.id === id);
  }

  public static createInfo(newInfo: Omit<FcInfo, "id">): FcInfo {
    const id = this.data.length ? this.data[this.data.length - 1].id + 1 : 1;
    const info: FcInfo = { id, ...newInfo };
    this.data.push(info);
    return info;
  }

  public static updateInfo(id: number, updatedData: Partial<FcInfo>): FcInfo | null {
    const index = this.data.findIndex(item => item.id === id);
    if (index === -1) return null;
    this.data[index] = { ...this.data[index], ...updatedData };
    return this.data[index];
  }

  public static deleteInfo(id: number): boolean {
    const index = this.data.findIndex(item => item.id === id);
    if (index === -1) return false;
    this.data.splice(index, 1);
    return true;
  }
}
