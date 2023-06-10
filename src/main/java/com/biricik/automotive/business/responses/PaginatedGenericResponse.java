package com.biricik.automotive.business.responses;

import java.util.List;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class PaginatedGenericResponse<T> {
    private List<T> content;
    private int pageNumber;
    private int pageSize;
    private long totalElements;
    private long totalPages;

    public PaginatedGenericResponse(List<T> content, int pageNumber, int pageSize, long totalElements, long totalPages) {
        this.content = content;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
    }

  
}
