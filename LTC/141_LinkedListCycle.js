var hasCycle = function(head) {
  if(!head) return false;
  while(head.val !== 'val') {
    head.val = 'val';
    head = head.next;
    if(!head) return false;
  }
  return true;
};

//단일연결리스트로 풀어야됨