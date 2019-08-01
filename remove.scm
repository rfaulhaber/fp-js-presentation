; remove the first occurance of atom A from L
(define (remove L A)                
  (cond ( (null? L) '() ) ; if null, return empty list
        ; if the first element of the list is what we're looking for,
        ; return the rest of the list without the first element
        ( (= (car L) A) (cdr L))
        ; otherwise, concatenate the first element of the list
        ; with the result of calling this function on the rest
        ; of the list
        (else (cons (car L)(remove (cdr L) A)))
  )
)

; from https://cs.gmu.edu/~white/CS363/Scheme/SchemeSamples.html