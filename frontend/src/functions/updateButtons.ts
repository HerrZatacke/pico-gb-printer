const gallery = document.getElementById("gallery") as HTMLDivElement;
const deleteSelectedBtn = document.getElementById("delete_selected_btn") as HTMLButtonElement;
const averageSelectedBtn = document.getElementById("average_selected_btn") as HTMLButtonElement;
const selectAllBtn = document.getElementById("select_all_btn") as HTMLButtonElement;

export const updateButtons = () => {
  const hasSelectedItems = document.querySelectorAll('.marked-for-action').length;
  selectAllBtn.disabled = !gallery.children.length;
  deleteSelectedBtn.disabled = !hasSelectedItems;
  averageSelectedBtn.disabled = !hasSelectedItems;
}