export class EtudiantService {
  static async find() {
    const response = await fetch("http://localhost:8000/students");
    if (response.ok) return await response.json();
    return [];
  }

  static async create(student: Omit<Student, "id">) {
    const response = await fetch("http://localhost:8000/students", {
      method: "POST",
      body: JSON.stringify(student),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) return await response.json();
    return null;
  }

  static async update(id: number, student: Partial<Student>) {
    const response = await fetch(`http://localhost:8000/students/${id}`, {
      method: "POST",
      body: JSON.stringify(student),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) return await response.json();
    return [];
  }

  static async delete(id: number) {
    const response = await fetch(`http://localhost:8000/students/delete/${id}`);
    if (response.ok) return await response.json();
    return [];
  }

}

export type Student = {
  id: number;
  first_name: string;
  last_name: string;
};
