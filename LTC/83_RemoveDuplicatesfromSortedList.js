var deleteDuplicates = function(head) {
  let cur = head;
  while(head && cur.next) {
    if(cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else cur = cur.next;
  }
  return head;
};